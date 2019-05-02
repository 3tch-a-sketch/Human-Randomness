Later use mongo db

https://closebrace.com/tutorials/2017-03-02/creating-a-simple-restful-web-app-with-nodejs-express-and-mongodb

we need to think about how it will work
if we want to just "hard" match
or not
so 0123456789
0123456789
would match
but not 0123356789
MattIsNotASheepToday at 18:56
ok...
well we can train it to recognise number runs
Etch-a-sketchToday at 18:56
cause for that we dont need an ai
MattIsNotASheepToday at 18:56
yeah
Etch-a-sketchToday at 18:56
we need like a deviation level
then we may not need a ai
MattIsNotASheepToday at 18:57
well that's not the only pattern to look for
Etch-a-sketchToday at 18:57
hmmm
we would have to take the 100 chrs
and split them
and then compare them to each other
maybe in a 2d array?
MattIsNotASheepToday at 18:58
maybe
Etch-a-sketchToday at 18:58
that seems easier than ai
