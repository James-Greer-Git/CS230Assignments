function generateName(){
    var firstName = ["Michael",
        "Christopher",
        "Jessica",
        "Matthew",
        "Ashley",
        "Jennifer",
        "Joshua",
        "Amanda",
        "Daniel",
        "David",
        "James",
        "Robert",
        "John",
        "Joseph",
        "Andrew",
        "Ryan",
        "Brandon",
        "Jason",
        "Justin",
        "Sarah"];

    var lastName = ["Smith",
        "Johnson",
        "Williams",
        "Jones",
        "Brown",
        "Davis",
        "Miller",
        "Wilson",
        "Moore",
        "Taylor",
        "Anderson",
        "Thomas",
        "Jackson",
        "White",
        "Harris",
        "Martin",
        "Thompson",
        "Garcia",
        "Martinez",
        "Robinson"];

    var name = firstName[Math.floor(Math.random()*(firstName.length))] + " " + lastName[Math.floor(Math.random()*(lastName.length))];
    return name;
}