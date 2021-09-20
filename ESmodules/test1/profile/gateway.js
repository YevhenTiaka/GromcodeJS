// экспортируйте fetchUser как export по умолчанию

export default async function fetchUser(userId) {
  console.log('implementation for fetchUser');
  const response = await fetch(`https://api.github.com/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to get user data');
  }
  // eslint-disable-next-line no-return-await
  return await response.json();
}
