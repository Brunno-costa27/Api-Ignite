import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository){}

    execute({description, name}: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists){
            throw new Error("Errooou!");
        }

        this.specificationsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationUseCase };