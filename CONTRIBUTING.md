# Guidelines for Contributing to Stratgg

## Making pull requests:
1. Clone the repo and create your own branch branch from the `development` branch.
2. When naming your branch please do the following:
  - Prefix all branch names with `client-side/` or `server-side/` depending on where the majority of your contributions will be written in.
  - If the work that will be done has nothing to do with the client side or server side <Strong>NO</Strong> prefix is necessary.
  - Following the `/` add no more than 4 words separated by `-`'s explaining what is being worked on in the branch. <i>Example:</i>  ```client-side/nav-menu-styling-change``` or similarly ```server-side/fastify-server-bug-fix```
   - If the branch has an associated issue add the issue number to the end of the branch name. <i>Example:</i>
 ```client-side/nav-menu-styling-change-300``` or similarly ```server-side/fastify-server-bug-fix-587```
 ***NOTE***  If there is no associated issue a number at the end of your branch name is not required.
3. When submitting your PR, request to merge it the `development` branch.
4. Each PR <Strong>MUST</Strong> be reviewed by atleast one developer.
5. If the PR is approved the branch will be mergined into `developemt` **NOTE**: Changes may be requested before merging.


## Release strategy:
Stratgg shall constantly maintain 3 protected branches. 
- `main` The production branch
- `REL_`  a.k.a the release branch; is where all planned features for the next production product are staged.

   -  The release branch will always be prefixed with `REL_`.
   -  The products version will follow the `_`. <i>Example:</i> `REL_0.0.1`
- `development` The Development branch

After all planne PRs for the current sprint are merged into `development` the `development` branch will be merged into the next `REL_` branch. Once the `REL_` branch has been reviewed, tested and approved for launch the `REL_` branch will be merged into `main` thus triggering a new version being released into production.


## Making an issue:

<p><b>Bug Reporting</b></p>

1. If the issue pertains to a bug that you or someone else has found prefix the issue with `Bug:` Following the colon add a brief description of the bug. <i>Example:</i>
```Bug: Clicking this button breaks the application ```

2. Add a comment explaining where the bug was found. This can be done in text or a screenshot. Include if you or someone else has been able to recreate the bug and the steps taken to do so. ***NOTE*** If you have have guidance or thoughts on a possible course of action to fix the bug add it to the comment as well. <i>Example:</i>
```I found this bug when trying to learn more about the League of legends players. I found that this bug only occurs when I am on Firefox. When I click the button on Chrome everything works as intented.```
