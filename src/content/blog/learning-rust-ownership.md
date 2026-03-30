---
title: 'My First Encounter with Ownership'
description: "Exploring Rust's ownership system and how it changes the way you think about memory."
pubDate: "March 30 2026"
heroImage: "../../assets/images/rust-ownership.png"
tags: ["rust", "low level"]
featured: false
---

<br>

## The Introduction

In the world of low-level programming, C has long been the gold standard, offering developers total freedom to manage memory manually. However, with great power comes great responsibility, and often, great frustration. Manual management is a double-edged sword that frequently leads to critical issues like **memory leaks**, **dangling pointers**, and **segmentation faults**. Rust enters the scene with a revolutionary promise: providing the performance and control of a systems language while eliminating these memory safety bugs entirely, all without the overhead of a **Garbage Collector** (GC). It achieves this through its most unique feature: **Ownership**.

## What is Ownership?

At its core, Ownership is a set of rules that governs how a Rust program manages memory. Unlike languages with a *GC* that scans memory at runtime, or languages like C where you manually `malloc` and `free`, Rust checks these rules at **compile time**. If the rules are broken, the program won't even build.

### The Owner

In Rust, every value (like a string, an integer, or a struct) is bound to a variable. That variable is called the **owner** of the value. The owner is responsible for cleaning up memory once it's no longer needed.

<br>
<hr>
<br>

## The 3 Rules

<br>

### Rule 1: Every value has an owner

In Rust, memory isn't just "floating" around. Every piece of data is tied to a specific variable name. This variable is responsible for that data.


### Rule 2: There can only be one owner at a time

This is where Rust differs most from other languages. To prevent *double-free* errors, a common bug in C where you try to free the same memory twice: 

```c
// double-free bug in C
int main() {
    char *s1 = malloc(10 * sizeof(char)); // Allocate memory on the heap
    strcpy(s1, "Hello");

    char *s2 = s1; // s2 is just a copy of the pointer address

    free(s1); // Memory is freed
    free(s2); // ❌ BUG: Double Free! The program will crash.

    return 0;
}
```

<br>

Rust ensures that if you assign one variable to another, the ownership moves:

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // Ownership MOVES from s1 to s2

    println!("{}", s1);    // ❌ ERROR: s1 is no longer the owner!
    println!("{}", s2);    // ✅ WORKS: s2 is the new owner.
}
```

<br>

### Rule 3: When the owner goes out of scope, the value is dropped

You don't need to call `free()` or `delete()`. When a variable's scope ends, Rust automatically calls a special function called `drop` to clean up the memory.

```rust
fn main() {
    {
        let s = String::from("hello"); // s enters scope, do something with s
    } // s goes OUT of scope here, the memory for "hello" is automatically freed by Rust.

    println!("{}", s); // ❌ ERROR: s is gone.
}
```

<br>
<hr>
<br>

## Ownership and Functions: The Borrowing System

When you pass a variable to a function, you have three main ways to handle its ownership and data. This is where the concept of **Borrowing** comes into play.

- **Taking Ownership (The Move):** If you pass a variable into a function without any special symbols, the ownership moves into the function. After the function ends, the variable is dropped and you can no longer use it in the original scope.
- **Immutable Reference (Borrowing):** If you only need to read the data, you can pass a reference using `&`. This is called "Immutable Borrowing", you cannot change the data
- **Mutable Reference (Mutable Borrowing):** If you need to modify the data without taking ownership, you use `&mut`. Crucial Rule: You can only have one active mutable reference to a piece of data at a time to prevent data races.

<br>

## What's Next?

This is just the beginning of my journey with Rust. My ultimate goal is to apply my knowledge of **Network Engineering** to build a high-performance **HTTP server** from scratch. Stay tuned for more posts as I move from basic syntax to networking and systems architecture!




