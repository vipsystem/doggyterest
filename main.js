// Below includes: dogBreeds object with images, etc.
var dogBreeds = { dogs: [
  {
    Breed: "Labrador Retriever",
    Class: "Working",
    image: "http://www.shirleys-wellness-cafe.com/images/labrador-retriever-yellow.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
    Breed: "English Bulldog",
    Class: "Lazy but playful",
    image: "http://upload.wikimedia.org/wikipedia/commons/1/13/Clyde_The_Bulldog.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false

  },
  {
    Breed: "York-Shire Terrior (aka. Yorkie)",
    Class: "Tiny",
    image: "http://t2.gstatic.com/images?q=tbn:ANd9GcQS2OtidjYafqWsA8pi4YpfRa2OWTzTEn8FBgz2oQDANLCCgQTF",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
    Breed: "Coming Soon",
    Class: "Working",
    image: "http://www.dngdecaldepot.com/images/1004.JPG",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
    Breed: "German Shepherd",
    Class: "Working",
    image: "http://www.dogbreedhealth.com/wp-content/uploads/2011/03/german-shepherd.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
    Breed: "Standard Poodle",
    Class: "Working",
    image: "http://www.purplecowvineyards.com/.a/6a00d83456011969e2019b0242a1d8970d-800wi",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
    Breed: "Golden Retriever",
    Class: "Working",
    image: "http://images7.alphacoders.com/413/413380.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
    Breed: "Boston Terrier",
    Class: "Working",
    image: "http://puppydogweb.com/gallery/bostonterriers/bostonterrier_freeman.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
    Breed: "English Mastiff",
    Class: "Working",
    image: "http://www.dogbreedinfo.com/images7/Mastiff_Tigger.JPG",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
    Breed: "Bull Terrier",
    Class: "Working",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRoXYWXaXIZ3WWlL8cQfVWYmNGYOBOZe8bBSRNKUHnaHJCwFZI0",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
    Breed: "Beagle",
    Class: "Working",
    image: "http://upload.wikimedia.org/wikipedia/commons/5/55/Beagle_600.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
   Breed: "Siberian Husky",
    Class: "Working",
    image: "http://img2.findthebest.com/sites/default/files/465/media/images/Siberian_Husky_896502.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
   Breed: "Shih Tzu",
    Class: "Working",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85vRbJEB9izjDZS9FMw0I8wfPScTTVmKSP9T220YFeT4qNTOc",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
  Breed: "Airedale Terrier",
    Class: "Working",
    image: "http://img3.findthebest.com/sites/default/files/465/media/images/Airedale_Terrier_909589.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
  Breed: "Boxer",
    Class: "Working",
    image: "http://upload.wikimedia.org/wikipedia/commons/0/01/Boxer_puppy_fawn.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
 Breed: "English Springer Spaniel",
    Class: "Working",
    image: "http://www.dogbreedinfo.com/images14/EnglishSpringerSpaniel1multipartxF8FF2IMG0124Copy.JPG",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
 Breed: "Newfoundland",
    Class: "Working",
    image: "http://owninganewfoundlanddog.files.wordpress.com/2012/06/newfdogpuppy.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
Breed: "Coming Soon",
    Class: "Working",
    image: "http://www.thewideworldofsport.com/Advertise_Here.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
 Breed: "Havanese",
    Class: "Toy",
    image: "http://www.petwave.com/~/media/Images/Center/Breed/Dogs/Toy%20Group/Havanese/Havanese%20dog%20breed.ashx",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
 Breed: "Dachshund",
    Class: "Working",
    image: "http://cdn.sheknows.com/articles/crave/dog_food.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
  {
 Breed: "Chihuahua",
    Class: "Toy",
    image: "http://www.dogbreedinfo.com/images18/ChihuahuaViansBigMacAttackMac33.JPG",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },
 {
 Breed: "Scooby Doo",
    Class: "Working",
    image: "http://img4.wikia.nocookie.net/__cb20090921172226/hanna-barbera/images/2/24/Scoobydoo.jpg",
    Popularity: "High",
    Energy Level: "8 ouf of 10",
    selected: false
  },   
]};

