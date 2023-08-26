
function Form() {
    return(<>
    
     <section className="bg-gray-50 ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <img src="/src/img/ilus.png" alt="" width="20px"></img>
              </div>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Registrar Información
                </h1>
                
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"  required=""></input>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">Apellidos</label>
                      <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"  required=""></input>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Correo</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">Teléfono</label>
                  <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"  required=""></input>
              </div>
                   
                    
                    <button type="submit"  className="w-full text-white bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Enviar</button>
            
            </div>
        </div>
    </div>
  </section>
    </>)
}

export default Form;