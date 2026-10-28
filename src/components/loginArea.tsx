import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowsRotate,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export function LoginArea() {
  return (
    <div className="flex h-screen box-border">
      <div className="flex flex-col justify-between bg-zinc-50 h-full w-[35%]">
        {/* Área de Login */}
        <div className="flex flex-col items-center h-[70%] w-full scrollbar-track-zinc-300 scrollbar-thumb-zinc-400 scrollbar-thin overflow-y-auto">
          <div className="flex flex-col items-center">
            <img
              src="/logo.png"
              alt="Logo marcar UnIntegração"
              className="w-40 m-4"
            />
            <h3 className="text-xl p-3 font-medium leading-5">
              Portal do Aluno
            </h3>
            <h3 className="text-xl p-3 font-medium leading-5">
              Seja bem-vindo(a)
            </h3>
            <div className="flex flex-col gap-2 p-3 w-96">
              <span>Login</span>
              <input
                type="text"
                name="nickname"
                id="nickname"
                placeholder="aluno@facint.edu.br"
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2 p-3 w-96">
              <span>Senha</span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2 p-3 text-xl font-light">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label htmlFor="rememberMe">Lembrar de mim</label>
            </div>
            {/* Caixa do Recaptcha */}
            <div className="flex h-19 w-75.5 max-w-full items-center justify-between border border-[#d3d3d3] bg-[#fafafa] px-3 shadow-sm">
              <label
                htmlFor="recaptcha"
                className="flex cursor-pointer items-center gap-3 text-sm text-[#222]"
              >
                <input
                  type="checkbox"
                  name="recaptcha"
                  id="recaptcha"
                  className="h-7 w-7 accent-[#4285f4]"
                />
                <span>Não sou um robô</span>
              </label>
              <div className="flex flex-col items-center text-[10px] text-[#555]">
                <FaArrowsRotate
                  aria-hidden="true"
                  className="text-[30px] text-[#4285f4]"
                />
                <span>reCAPTCHA</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-800 text-white font-bold mt-4 py-2 px-32 rounded w-[80%]"
          >
            Acessar
          </button>

          <span className="text-sm font-semibold text-gray-500 mt-4">
            Valide seu documento{" "}
            <a
              href="www.facint.edu.br"
              className="text-blue-800 hover:underline"
            >
              clicando aqui
            </a>
          </span>
        </div>

        {/* Contatos da Instituição */}
        <div className="flex flex-col items-center bg-blue-950 h-40 w-full pt-4">
          <div className="flex items-center justify-center gap-2 text-zinc-50 p-2">
            <a href="www.facebook.com">
              <FaFacebookF size={30} />
            </a>
            <a href="www.twitter.com">
              <FaXTwitter size={30} />
            </a>
            <a href="www.linkedin.com">
              <FaLinkedinIn size={30} />
            </a>
            <a href="www.instagram.com">
              <FaInstagram size={30} />
            </a>
            <a href="www.youtube.com">
              <FaYoutube size={30} />
            </a>
          </div>
          <div className="text-zinc-50 text-center p-2">
            <p>Av. Paraná, 1118 - Zona 7 Maringá - PR, 87020-085</p>
          </div>
          <div className="flex gap-3 justify-center items-center text-zinc-50 text-center p-2">
            <span>(44) 3024-4242 ☎️</span>
            <span className="flex gap-1">(44) 98464-1888 <img src="/whatsapp-icon.avif" alt="WhatsApp" width="20" height="20"/></span>
          </div>
        </div>
      </div>

      {/* Right Background Image */}
      <div className="bg-[url(bg-image-login-home.jpeg)] bg-cover bg-center bg-no-repeat h-full w-[65%] p-14"></div>
    </div>
  );
}
