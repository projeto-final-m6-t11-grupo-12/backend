import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

async function deleteUserService(id: string) {
    const userRepository = AppDataSource.getRepository(User);
    const userDelete = await userRepository.findOne({
        where: {
            id: id,
        },
    });

    if (!userDelete) {
        throw new AppError(404, "Usuário não encontrado");
    }

    await userRepository.delete(id);

    return true;
}

export default deleteUserService;
