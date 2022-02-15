var media = 0;
class CalculoMedia {
    public num1: Number;
    public num2: Number;

    public calcular(num1, num2) {
        var media = (num1+num2)/2;
        console.log(media);
    }
}  

var calculoMedia = new CalculoMedia();

calculoMedia.num1 = 5;
calculoMedia.num2 = 10;

calculoMedia.calcular(calculoMedia.num1, calculoMedia.num2);
