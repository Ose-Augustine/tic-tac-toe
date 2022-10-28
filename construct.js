const Player = (name) => {
    let points = 0;
    const sayName = () => console.log(` Hello ${name}`);
    return {sayName}
}

human = Player('john')
human.sayName()