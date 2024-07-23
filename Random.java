import java.util.Scanner;
class Random{
    public static void main(String[] args) {
        int  a =(int)(Math.random()*100);
        Scanner sc=new Scanner(System.in);
        int b;
        int count=1;
        // System.out.println(a);
       do{
        System.out.println("Guess the number");
        b=sc.nextInt();
        if(a==b){
            System.out.println("You won");
            break;
        }
        if(a>b){
            System.out.println("Guess a bigger number");
            System.out.println("try again!");
            count++;
        }
        if(a<b){
            System.out.println("Guess a smaller number");
            System.out.println("try again!");
            count++;
        }
       }while(b>0);
        System.out.println("Total try = " + count);
    }
}