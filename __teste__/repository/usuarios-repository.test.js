const {
  getUsuarios,
  createUsuarios,
  findUsuario,
} = require("../../repository/usuarios-repository");

const mock_ = process.env.NODE_TEST;

const countUsuarios = 5;

test("get all usuarios", async () => {
  if (mock_) {
    const allUsuarios = await getUsuarios();
    expect(allUsuarios.length).toBe(countUsuarios);
  } else {
    expect(1).toBe(1);
  }
});

test("get all usuarios add new user", async () => {
  if (mock_) {
    const usuario = {
      nome: "teste 23456",
      email: "teste23456@gmail.com",
      senha: "123456",
    };
    await createUsuarios(usuario);

    const allUsuarios = await getUsuarios();

    expect(allUsuarios.length).toBe(6);
  } else {
    expect(1).toBe(1);
  }
});

test("get new user", async () => {
  if (mock_) {
    const usuario = {
      nome: "teste 23456",
      email: "teste23456@gmail.com",
      senha: "123456",
    };
    const usuario_result = await findUsuario(usuario.email);

    expect(usuario_result.nome.toLowerCase()).toBe(usuario.nome.toLowerCase());
  } else {
    expect(1).toBe(1);
  }
});
