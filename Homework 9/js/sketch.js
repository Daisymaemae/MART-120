function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    
    background(239,195,202);
    textSize(22)
    text("Hellooo!", 10,80);

    // head
    fill(206,188,163);
    circle(250,100,165);

    // eyes
    strokeWeight(5);
    fill(0);
    point(220,75);
    point(285,75);

    // mouth
    arc(250, 120, 70, 75, 0, PI + QUARTER_PI, CHORD);

    // hair
    line(130,175,175,50);
    line(325,50,360,175);

    // body
    fill(0,0,0);
    rect(200,185,100,150);

    // right arm
    fill(0);
    rect(300,195,50,10);

    // left arm
    fill(0);
    rect(150,195,50,10);

    // left leg
    fill(0);
    rect(200,335,10,50);

    // right leg
    fill(0);
    rect(290,335,10,50);

    fill(255);
    triangle(220,320,250,220,280,320);

    fill(120);
    textSize(22);
    text("Daisy Cooper",270,500 );

}