# Por Jose Parra

t=1
num1 = 1
num2 = 1

while t!=0
  
  num1 = 1
  num2 = 1
  
  puts "****************************************************************************"
  puts "********************************    MENU    ********************************"
  puts "****************************************************************************"
  2.times { puts } 
  puts "1. Sumar"
  puts "2. Restar"
  puts "3. Multiplicar"
  puts "4. Dividir"
  puts "0. Salir"
  2.times { puts } 
  puts "****************************************************************************"
  2.times { puts } 
  puts "Seleccione una opcion digitando un numero entero: "
  5.times { puts } 

  begin  
    t = Integer(gets.chomp)
    if t != 0
      puts "Digite primer entero: "
      begin 
        num1 = Integer(gets.chomp)
        rescue  #captura del error
        puts "No digito un numero entero, vuelva a intentar"
      end 
      puts "Digite segundo entero: "
      begin 
        num2 = Integer(gets.chomp)
        rescue  #captura del error
        puts "No digito un numero entero, vuelva a intentar"
      end 
    end

    case t
    when 0 
      puts "Programa terminado con exito"
      10.times { puts } 
    when 1 
      puts "La suma da: #{num1} + #{num2} = #{num1+num2}"
    when 2
      puts "La resta da: #{num1} - #{num2} = #{num1-num2}"
    when 3
      puts "La multiplicacion da: #{num1} * #{num2} = #{num1*num2}"
    when 4
      begin 
        puts "La division da: #{num1} / #{num2} = #{num1/num2}"
      rescue  #captura del error
        puts "No se puede dividir por cero"
    end 
    else 
      puts "Error en los datos ingresados, vuelva a intentar."
    end

  rescue  #captura del error
    puts "No digito un numero entero, vuelva a intentar"
  end 
end





#Calculadora que sume reste divida multiplique, validar representacion numerica que
#no divida por cero, y no se salga hasta que uno digite la opcion de salir
