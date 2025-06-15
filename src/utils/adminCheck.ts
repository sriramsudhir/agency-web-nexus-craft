
export const ADMIN_EMAIL = "sriramsudhir11@gmail.com";

export const isAdmin = (userEmail: string | undefined | null): boolean => {
  return userEmail === ADMIN_EMAIL;
};
