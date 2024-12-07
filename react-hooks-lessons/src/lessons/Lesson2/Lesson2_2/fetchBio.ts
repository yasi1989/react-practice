export async function fetchBio(person: string) {
  // 仮のネットワークレイテンシをシミュレートするために、少し遅延させます。
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const bio = `This is a ${person}'s bio`;
  return bio;
}
