(function (global) {
	var Cat = null, Bird = null, Worm = null;
    int a;
   
    var Cat = {
     eat: function (zwierze){
        if (((zwierze.type === "Worm") && (this.type === "Bird")) || ((zwierze.type === "Bird") && (this.type === "Cat")))
    return "Mniam!";
    else return "Blee!";
    }
    },Worm, Bird;
	if (!global.UAM) {
		global.UAM = {};
	}
    //obiekty
     Bird = Object.create(Cat);
    //Worm = Object.create(Worm);
    Worm = Object.create(Bird);
    //typy
    Bird.type="Bird";
    Worm.type="Worm";
    Cat.type="Cat";
	global.UAM.Cat = Cat;
	global.UAM.Bird = Bird;
	global.UAM.Worm = Worm;

}(window));

/*
	W zadaniu mamy 3 rodzaje zwierząt: koty, ptaki i robaki. Respektując prawa natury koty jedzą ptaki, a ptaki robaki.
	Zaimplementuj obiekty Cat, Bird i Worm tak, aby poniższy kod zwracał prawidłowe rezultaty:

	var cat1 = Object.create(Cat);
	var cat2 = Object.create(Cat);
	var bird = Object.create(Bird);
	var worm = Object.create(Worm);

	cat1.eat(bird); // "Mniam!"
	cat2.eat(bird); // "Mniam!"
	bird.eat(worm); // "Mniam!"
	worm.eat(cat1); // "Blee!"
	cat1.eat(cat2); // "Blee!"

	Dodatkowo wszystkie obiekty mają korzystać ze wspólnej metody eat.
*/




