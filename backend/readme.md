What to do next:

Implement proper authentication (JWT or session).

Pass user info from auth to routes; always filter tasks by userId.

Add validation and sanitize input before updates/creates.

Handle errors properly (404 if no task to delete/update).

Add middleware for DRY code on auth and error handling.

Consider adding pagination or filtering on GET tasks.

Think about performance and security now, not later.



//do this: when the user is deleted, the tasks that the user created should also be deleted.
//Data validation;
//error handeling and validation

