import React from "react";
import { Button, Card, Label, Checkbox, TextInput, Datepicker } from "flowbite-react";

export default function Register() {
    return <Card className="max-w-lg">
    <form className="flex flex-col gap-4">
      <div className="text-2xl font-semibold">
        Registrate!
      </div>
      <div>
        <TextInput id="nameUser" type="name" placeholder="Nombres y apellidos" required />
      </div>
      <div>
        <TextInput id="email1" type="email" placeholder="Correo electrónico" required />
      </div>

      <div>
      <Label className="text-sm font-extralight">Fecha de nacimiento</Label> 
        <Datepicker id="birthday" placeholder="Fecha de nacimiento" required />
      </div>

      <div>
        <TextInput id="password1" placeholder="Contraseña" type="password" required />
      </div>
      <div>
        <TextInput id="password1" placeholder="Confirmar contraseña" type="password" required />
      </div>

      <div>
        <Label className="text-sm font-extralight">Acepta terminos y condiciones?</Label>  <Checkbox/>
      </div>

      <Button color="purple" href="/Auth/login" type="submit">Registrarme</Button>

    </form>
  </Card>
  }