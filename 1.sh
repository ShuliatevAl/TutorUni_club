#!/bin/sh

git filter-branch -f --env-filter '
OLD_EMAIL="<intermediat@DESKTOP-K8V2R0F>"
CORRECT_EMAIL="chemistryalexey@rambler.ru"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
