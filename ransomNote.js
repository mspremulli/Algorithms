const checkMagazine = (magazine, note) => {
  note = note.split(' ');
  magazine = magazine.split(' ');

  for(let i = 0; i < note.length; i++){
    // if  word is in magazine, remove word from magazine
    let wordIndex = magazine.indexOf(note[i]);
    if(wordIndex != -1){
      magazine.splice(wordIndex, 1);
    }
    //if its not in the magazine end function with 'No' response
    else {
      return 'No';
    }
    console.log(note[i], magazine);
  }
  return 'Yes';
}

console.log(checkMagazine("two times three is not four", "two times two is four"));