/*
LOOP TRIANGLE

Write a loop that calls the console.log function seven times and prints the triangle below

#
##
###
####
#####
######
#######

You may find it useful to know that the length of a string can be checked by typing .length after it.
*/

for (let i = '#'; i.length <= 7; i += '#') {
  console.log(i);
}
