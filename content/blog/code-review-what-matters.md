---
title: "Dummy blog"
date: 2026-02-01
summary: "This is a basic summary for this blog"
---

## Context

After reviewing thousands of pull requests, I've noticed patterns in what makes reviews useful versus what wastes time. This is what I've learned.

## What Matters

### 1. Correctness

Does the code do what it claims? Are edge cases handled? This is non-negotiable and should be the primary focus.

**Look for**:
- Off-by-one errors in loops and array access
- Null/nil pointer dereferences
- Race conditions in concurrent code
- Incorrect error handling

### 2. Clarity

Can another engineer understand this code in 6 months? Clever code is usually bad code.

**Ask**:
- Are variable names descriptive?
- Is the control flow straightforward?
- Are complex sections explained with comments?
- Would a new team member understand this?

### 3. Testing

Are the right things tested? Not "is coverage 100%" but "would these tests catch real bugs?"

**Check**:
- Tests cover the actual business logic, not just implementation details
- Edge cases have explicit test cases
- Error paths are tested
- Tests are readable and maintainable

## What Doesn't Matter (Usually)

### Style Nitpicks

If you have a linter, let it handle formatting. Don't waste review time on brace placement or variable naming conventions that are already automated.

### Premature Optimization

Unless there's a demonstrated performance problem, don't block reviews on theoretical optimizations. Readable code that works is better than fast code that's hard to maintain.

### Personal Preferences

"I would have done it differently" is not useful feedback unless you can articulate why your approach is objectively better (more correct, clearer, or more maintainable).

## Review Process

### For Reviewers

1. **Read the description first**: Understand what problem is being solved
2. **Check correctness**: Does it actually work?
3. **Consider edge cases**: What could go wrong?
4. **Evaluate clarity**: Will this be maintainable?
5. **Verify tests**: Are the right things tested?

### For Authors

1. **Write a clear description**: Explain the problem and your approach
2. **Keep PRs focused**: One logical change per PR
3. **Add context**: Link to relevant issues or documentation
4. **Highlight trade-offs**: Explain decisions that might not be obvious
5. **Respond to feedback**: Engage with questions and concerns

## Common Pitfalls

**Bikeshedding**: Spending 30 minutes debating variable names while missing a race condition.

**Scope Creep**: "While you're here, can you also..." leads to massive PRs that never ship.

**Perfectionism**: Blocking good code because it's not perfect. Ship working code, iterate later.

## What Good Reviews Look Like

- Focus on correctness and clarity
- Ask questions rather than make demands
- Suggest alternatives with reasoning
- Approve when code is good enough, not perfect
- Block only on actual problems, not preferences

## Conclusion

Code review is about catching bugs and ensuring maintainability, not demonstrating expertise or enforcing personal style. Keep reviews focused on what matters: does it work, is it clear, and is it tested?

The goal is shipping reliable software, not perfect code.
