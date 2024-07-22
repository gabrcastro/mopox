import { useAppDispatch } from "@/lib/hooks";
import { ModalComponent } from "../modal/modal";
import { closeAuthModal } from "@/lib/features/auth/auth.slice";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export function AuthModal() {
  const dispatch = useAppDispatch();

  const [recoverPassword, setRecoverPassword] = useState(false);

  function handleCloseAuthModal() {
    dispatch(closeAuthModal());
  }

  return (
    <ModalComponent
      title={recoverPassword ? "Recuperar senha" : "Entrar"}
      closeFunction={handleCloseAuthModal}
    >
      {!recoverPassword ? (
        <div className="flex flex-col mt-10">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              className="bg-transparent rounded-xl border-[.5px] border-zinc-700 px-4 min-h-11 text-zinc-300 focus:outline-none"
              placeholder="E-mail"
            />
            <input
              type="password"
              className="bg-transparent rounded-xl border-[.5px] border-zinc-700 px-4 min-h-11 text-zinc-300 focus:outline-none"
              placeholder="Senha"
            />
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setRecoverPassword(true)}
                className="text-zinc-500 text-xs text-right hover:text-zinc-400"
              >
                Esqueceu sua senha?
              </button>
            </div>
            <button
              className="w-full min-h-12 bg-zinc-800 rounded-xl p-3 text-center shadow-shape flex items-center justify-center hover:bg-zinc-800/80 mt-5"
              type="button"
            >
              <span className="ml-4 text-zinc-300 text-sm font-medium">
                Entrar com email e senha
              </span>
            </button>
          </div>
          <span className="text-center text-zinc-300 my-3">ou</span>
          <button
            className="w-full min-h-12 bg-zinc-300 rounded-xl p-3 text-center shadow-shape flex items-center justify-center hover:bg-zinc-300/80"
            type="button"
          >
            <Image
              src={"/icons/google.svg"}
              alt="Google Icon"
              width={25}
              height={25}
            />
            <span className="ml-4 text-zinc-900 text-sm font-medium">
              Login com Google
            </span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col mt-10">
          <button
            type="button"
            onClick={() => setRecoverPassword(false)}
            className="flex flex-row items-start justify-start hover:brightness-125 w-min"
          >
            <ArrowLeft className="text-zinc-300 size-4 mb-5" />
            <span className="text-zinc-300 text-xs ml-3 mt-[1px]">Voltar</span>
          </button>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              className="bg-transparent rounded-xl border-[.5px] border-zinc-700 px-4 min-h-11 text-zinc-300 focus:outline-none"
              placeholder="E-mail"
            />

            <button
              className="w-full min-h-12 bg-zinc-800 rounded-xl p-3 text-center shadow-shape flex items-center justify-center hover:bg-zinc-800/80 mt-5"
              type="button"
            >
              <span className="ml-4 text-zinc-300 text-sm font-medium">
                Recuperar senha
              </span>
            </button>
          </div>
        </div>
      )}
    </ModalComponent>
  );
}
