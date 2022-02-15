class Data {
    public dia: Number;
    public mes: Number;
    public ano: Number;

    public status() {
        console.log(this.dia + '/' + this.mes + '/' + this.ano);
    }
}  

var data = new Data();

data.dia = 19;
data.mes = 4;
data.ano = 2006;

data.status();
