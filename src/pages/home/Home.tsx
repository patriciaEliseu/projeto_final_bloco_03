



function Home() {
	return (
    <>
		  <div className="bg-flex justify-center">

                <div
                    className="bg-linear-to-bl from-slate-50 via-fuchsia-50 to-gray-100 
                    flex flex-col md:flex-row items-center justify-center 
                    px-10 gap-10"
                >

                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h1 className="text-8xl font-extrabold text-fuchsia-600">
                            Seja Bem Vinde!
                        </h1>
                        <p className="text-slate-800 leading-relaxed text-lg font-semibold">
                            Aqui você encontra Medicamentos e Cosméticos!
                        </p>
                        <div className="text-slate-800 leading-relaxed text-lg font-semibold flex justify-around gap-4">
                              Cadastrar Produto
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img
                            src="https://ik.imagekit.io/0lohuh51eq/Imagem%20colada%20(3).png"
                            alt="Imagem da home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
                     
      </>
	)
}

export default Home