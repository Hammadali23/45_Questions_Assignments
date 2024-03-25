let magicians: string[] = [
  "David Blaine",
  "David Copperfield",
  "Harry Houdini",
];
function show_magicianss(magicians: string[]) {
  magicians.forEach((element) => {
    console.log(element);
  });
}
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i];
  }
}
make_great(magicians);
show_magicianss(magicians);
