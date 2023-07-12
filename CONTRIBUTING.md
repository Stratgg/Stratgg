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
5. If the PR is approved the branch will be merged into `development` **NOTE**: Changes may be requested before merging.

<hr>

## Making an issue:

<p><b>Feature Requests</b></p>

1. If you have an idea for a new feature or a change to an existing feature, create an issue and prefix it with `Feature:` Following the colon add a brief description of the feature. <i>Example:</i>```Feature: Add a new help menu to the website.  ``` 
2. Add a comment explaining the feature in more detail. Explain what the feature is, how it will be used, and why it is needed.

<p><b>Minor Bug Reporting</b></p>

1. If the issue pertains to a ***NON APPLICATION BRAKING BUG*** that you or someone else has found prefix the issue with `Bug:` Following the colon add a brief description of the bug. <i>Example:</i>```Bug: Words are misspelled on the home page.  ```

1. Add a comment explaining where the bug was found. This can be done in text or a screenshot. Include if you or someone else has been able to recreate the bug and the steps taken to do so. 
2. If you have have guidance or thoughts on a possible course of action to fix the bug add it to the comment as well. <i>Example:</i>
```I think the bug is in the home page component. I was able to recreate the bug by clicking on the home page link in the nav menu.```


<p><b>Major Bug Reporting</b></p>

1. If the issue pertains to a ***APPLICATION BRAKING BUG*** bug that you or someone else has found, the issue will be given the `Hotfix` prefix. Following the prefix add a brief description of the bug. 
<i>Example:</i> ```Hotfix: The home page is not loading.```
2. Hotfixes will be given the highest priority and will be worked on immediately.
3. Hotfixes are merged into the `main` branch and will be released into production as soon as possible.
4. If you have any guidance or thoughts on a possible course of action to fix the bug add it to the comment as well. <i>Example:</i>
 ```I think the bug is being caused by a missing dependency.```

<hr>

## Release strategy:
Stratgg maintains 3 protected branches. 
- `main` The production branch
- `REL_`  a.k.a the release branch; is where all planned features for the next production product are staged.

   -  The release branch will always be prefixed with `REL_`.
   -  The products version will follow the `_`.<i>Example:</i> `REL_0.1`
- `development` The Development branch

After all planned PRs for the current milestone are merged into `development`, the `development` branch will be merged into the next `REL_` branch. Once the `REL_` branch has been reviewed, tested and approved for launch the `REL_` branch will be merged into `main` thus triggering a new version being released into production.
