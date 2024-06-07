import { IuserDTO, IuserStructure, UserDTO } from '../models/userModels';

export class UserService {
    private readonly url = 'http://localhost:3002/user/';

    //----CREATING-----
    async addNewUser(user: IuserDTO): Promise<IuserStructure> {
        const newUser = new UserDTO(user.userName, user.email);
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(newUser),
        });
        return await response.json();
    }

    //----READING--------
    async getAllUsers(): Promise<IuserDTO[]> {
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }

    async getUserById(id: string): Promise<IuserDTO> {
        try {
            const response = await fetch(`${this.url}+${id}`);
            if (!response.ok) {
                throw new Error(`HTTP Request Error, ${response.status}`);
            }
            const foundUser = await response.json();
            return foundUser;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    //----UPDATING--------
    //-----------------------REMOVE THIS COMMENT AFTER CHECKING IF THIS IS THE FUNCTIONALITY OF UPDATE----------
    //-----------------------IF THE PARAM SHOULD BE OF TYPE INTERFACE OR TYPE USER
    async updateUserDetails(newUserDetails: IuserStructure): Promise<IuserDTO> {
        try {
            const response = await fetch(`${this.url}+${newUserDetails.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUserDetails),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const updatedUser = await response.json();
            return updatedUser;
        } catch (error) {
            console.error('Error updating user details:', error);
            throw error;
        }
    }

    //------DELETE-----
    async removeUser(id: string) {
        try {
            await fetch(`${this.url} + ${id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
