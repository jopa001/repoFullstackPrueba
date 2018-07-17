# Basado en Python y Perl, ademas de  Lisp, Lua, Dylan y CLU.


=begin
my_num = 25
my_boolean = true
my_string = "Ruby"
puts 5*5

my_num = 100
print my_num
puts my_num
=end


=begin
puts "I love ruby".length    #Muestra la longitud
puts "I love ruby".reverse   #Lo imprime al reves

puts "ErIc".upcase          #Cambia ErIc a mayuscula
puts "ErIc".downcase        #Cambia ErIc a minuscula
=end




=begin

print "Cual es tu nombre? "
first_name = gets.chomp   #le pone mayuscula a la primera palabra
first_name.capitalize!

print "Cual es tu apellido? "
last_name = gets.chomp
last_name.capitalize!

print "En que ciudad naciste? "
city = gets.chomp
city.capitalize!

puts "Tu nombre es #{first_name} #{last_name} y naciste en #{city}!"
puts first_name

=end


=begin
print "Integer Please: "
user_num = Integer(gets.chomp)

if user_num <0
    puts "El numero es negativo"
elsif user_num >0
    puts "El numero es positivo!"
else
    puts "Es un cero!"
end

=end


=begin
hungry = false

unless hungry
  puts "Escribamos mas codigos!"
else
  puts "Tiempo del break!"
end
=end


=begin
#Concatenacion
name = 'Sneyder'
puts "Mi nombre es: #{name}"
puts 'Mi nombre es: ' + name
=end



=begin
s = "-*-"
puts 'Mi nombre es: '
puts s*10
puts 'Mi nombre es: '
=end


=begin
counter = 1
while counter < 11
  puts "While: #{counter}"
  counter = counter + 1
end

counter = 1
until counter > 10
  puts "until: #{counter}"
  counter +=1
end

for num in 1..10 
  puts "for Incluyente, inlcuye todos el rango: #{num}"
end

for num in 1...10   
  puts "for Excluyente, saca el ultimo numero: #{num}"
end

for num in -5...10   
  puts "Negativo for Excluyente, saca el ultimo numero: #{num}"
end

=end

=begin

my_array = [1,2,true,3,4,5]
my_array2 = [1,2,3,4,5]
puts my_array

my_array.each { |x|
  puts "Numero es: #{x}"
}

my_array2.each { |x|
  puts "Numero es por dos: #{x*2}"
}

my_array2.each { |x|
  x += 11
  puts "#{x}"
}


puts my_array[-6].nil?



my_array2.each do |x|
  x += 1
  puts "Esto es con el do #{x}"
end

=end


=begin

10.times { print "spam" }
10.times { puts "spam" }

puts "**"*30
10.times do |x|
  puts "Times #{x}"   #interesante, el ciclo avanza gracias al times de 0 en adelante
end


=end


=begin

my_hash = { 'name' => "Eric",
  "age" => 26,
  "hungry?" => true,  #Es mejor no crear string y asignarle valor porque puede haber incongruencias
  :simbolo => 547     #Esta es la forma correcta del simbolo dentro del hash en fomato JSON
}

puts my_hash["name"]
puts my_hash["age"]
puts my_hash["hungry?"]

puts my_hash[:age] =50
puts my_hash["age"] =60
puts my_hash["age"] =80
puts my_hash["otra"] =80
puts my_hash[:age] =70

#puts my_hash.name    #esto no se puede hacer, manda un error.
#puts my_hash.age
#puts my_hash.hungry

puts my_hash

=end



#pets = Hash.new
#pets['cat']='cat'
#puts pets['cat']


=begin

family = { "Homer" => "dad",
  "Marge" => "mom",
  "Lisa" => "sister",
  "Maggie" => "sister",
  "Abe" => "grandpa",
  "Santa's Little Helper" => "dog"
}

family.each { |x, y| puts "#{x}: #{y}" }

=end


=begin

#bloque de rescate
begin  
  t = Integer("15")
  #t = Integer("No numero")
  puts t
rescue  
  puts "no era un numero"
end 

=end

=begin
def mi_primer_metodo
  puts "Esta es la impresion con salto de linea para mi primer metodo"
end

mi_primer_metodo()

def mi_metodo_con_parametro(text)
  puts "impresion de metodo con parametro: #{text}" 
end

mi_metodo_con_parametro "Aqui va el parametro"

def suma(a,b)
	return a+b
end

puts suma(2,3)

=end


=begin
def suma_otro(a,b)  #Este es con retorno implicito retornando la ultima linea del metodo
	a-b
	a*b
	a+b
end

puts suma_otro(3,4)


def suma_otro2(a,b)  #Este es con retorno implicito retornando la ultima linea del metodo
	if true
		a+b 
		a-b #Devuelve la ultima linea ejecutada
	else 
		a*b 
		a/b 
	end
end

puts suma_otro2(4,5)



def sumaNuevamente(a,b) 
	{:a=>a
	:b=>b
	}


puts sumaNuevamente(4,5)

=end

=begin

class Perro  #Primera letra mayuscula para la clase
    def initialize(raza, nombre)   #Comportamiento, constructor
      @raza = raza  
      @nombre = nombre  
    end  
    
    def ladrar  #Comportamiento, este es un metodo
      puts 'Guau! Guau!'
    end  
    
    def display  
      puts "Mi raza es: #{@raza} y mi nombre es #{@nombre}"  
    end  

    def nombre
    	@nombre
    end

    def nombre (n)
    	@nombre = n
    	otro_nombre
    	otro_nombre2 
    end

	private
	def otro_nombre
		@nombre = "privado"
	end

	protected
	def otro_nombre2
		@nombre = "protegido"
	end

end  
    
p = Perro.new('Labrador', 'Spike')  
puts p.ladrar
puts p.display
#puts p.nombre   #error de sobrecarga de operador, en este programa no hay polimorfismo
puts p.nombre('Juan')


=end

t=2
case t
when 1 
	puts "Era uno"
when 2
	puts "Era dos"
else 
	puts "Caso por defecto"
end









#Calculadora que sume reste divida multiplique, validar representacion numerica que
#no divida por cero, y no se salga hasta que uno digite la opcion de salir
# de entrada ciclo while  y  switch case
