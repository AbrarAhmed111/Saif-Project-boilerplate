// Combining all the repositories together

import AuthRepository from "./AuthRepository";

const repositories = {
    auth: AuthRepository,
};
export const RepositoryFactory = {
    get: (name) => repositories[name],
};
