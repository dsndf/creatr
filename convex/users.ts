import { internalQuery, mutation, query } from "./_generated/server";
import { v } from "convex/values";

import { internal } from "./_generated/api";
/**
 * This is meant to store the new user in the users collection.
 */
export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    // Check if we've already stored this identity before.
    // Note: If you don't want to define an index right away, you can use
    // ctx.db.query("users")
    //  .filter(q => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
    //  .unique();
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (user !== null) {
      // If we've seen this identity before but the name has changed, patch the value.
      if (user.name !== identity.name) {
        await ctx.db.patch(user._id, { name: identity.name });
      }
      return user._id;
    }
    // If it's a new identity, create a new `User`.
    return await ctx.db.insert("users", {
      name: identity.name ?? "Anonymous",
      tokenIdentifier: identity.tokenIdentifier,
      username: identity.givenName,
      email: identity.email!,
      avatar: identity.pictureUrl,
      createdAt: Date.now(),
      lastActiveAt: Date.now(),
    });
  },
});

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called getCurrentUser without authentication present");
    }
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (user !== null) {
      return user;
    }
    return null;
  },
});
export const getCurrentUserInternal = internalQuery({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called getCurrentUser without authentication present");
    }
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (user !== null) {
      return user;
    }
    return null;
  },
});

export const updateUsername = mutation({
  args: {
    newUsername: v.string(),
  },
  handler: async (ctx, args) => {
    const currentUser = await ctx.runQuery(internal.users.getCurrentUserInternal, {});
    if (!currentUser) {
      throw new Error("Current user not found");
    }

    // Validate the new username
    const usernameRegex = /^[a-zA-Z0-9._-]{3,16}$/;
    if (!usernameRegex.test(args.newUsername)) {
      throw new Error(
        "Invalid username. It must be 3-16 characters long and can only contain letters, numbers, dots, underscores, and hyphens."
      );
    }
    if (currentUser.username === args.newUsername) {
      return;
    }
    // Check if the username is already taken
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_username", (q) => q.eq("username", args.newUsername))
      .unique();

    if (existingUser) {
      throw new Error("Username is already taken.");
    }
    const userId = currentUser._id as string;
    await ctx.db.patch(currentUser._id, {
      username: args.newUsername,
    });
    return userId;
  },
});
