const recoverPasswordTemplate = (name: string, password: string) => {
  return `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 500px;">
        <h2 style="color: #007bff;">Recuperação de Senha</h2>
        <p>Olá, <strong>${name}</strong>,</p>
        <p>Você solicitou a recuperação de senha. Aqui está sua nova senha de acesso:</p>
        <p style="background: #f4f4f4; padding: 10px; font-size: 18px; font-weight: bold; text-align: center; border-radius: 5px;">
          ${password}
        </p>
        <p>Recomendamos que você altere essa senha assim que acessar sua conta.</p>
        <p>Se você não solicitou essa alteração, entre em contato com o suporte imediatamente.</p>
        <br />
        <p style="font-size: 14px; color: #888;">Atenciosamente,<br/>Equipe de Suporte</p>
      </div>
    `;
};

export { recoverPasswordTemplate };
