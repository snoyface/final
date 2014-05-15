float angle = 0;
float px = 0, py = 0;
float amplitude = 30;
float frequency = 0;
float fillGap = 2.5;
color c;

void setup() {
  size(640, 360);
  background(200);
  noLoop();
}

void draw() {
  for (int i =- 75; i < height+75; i++){
    // Reset angle to 0, so waves stack properly
    angle = 0;
    // Increasing frequency causes more gaps
    frequency+=.002;
    for (float j = 0; j < width+75; j++){
      py = i + sin(radians(angle)) * amplitude;
      angle += frequency;
      c =  color(abs(py-i)*255/amplitude, 255-abs(py-i)*255/amplitude, j*(255.0/(width+50)));
      // Hack to fill gaps. Raise value of fillGap if you increase frequency
      for (int filler = 0; filler < fillGap; filler++){
        set(int(j-filler), int(py)-filler, c);
        set(int(j), int(py), c);
        set(int(j+filler), int(py)+filler, c);
      }
    }
  }
}

window.onload = function() {

var myCanvas = document.createElement('canvas');



}




/*
ARDUINO test code:
// Pulse Monitor Test Script
int ledPin = 13;
int sensorPin = 0;
double alpha = 0.75;
int period = 20;
double change = 0.0;
void setup ()
{
  pinMode (ledPin, OUTPUT);
  Serial.begin (115200);
}
void loop ()
{
    static double oldValue = 0;
    static double oldChange = 0;
    int rawValue = analogRead (sensorPin);
    double value = alpha * oldValue + (1 - alpha) * rawValue;
    
    Serial.print (rawValue);
    Serial.print (",");
    Serial.println (value);
    oldValue = value;
    delay (period);
}
*/

var ledPin = 13;
var sensorPin = 0;
//double alpha = 0.75;
var period = 20;
//double change = 0.0;
function setup ()
{
  pinMode (ledPin, OUTPUT);
  Serial.begin (115200);
}
function loop ()
{
    static double oldValue = 0;
    static double oldChange = 0;
    int rawValue = analogRead (sensorPin);
    double value = alpha * oldValue + (1 - alpha) * rawValue;
    
    console.log (rawValue);
    console.log  (",");
    console.log  (value);
    oldValue = value;
    delay (period);
}