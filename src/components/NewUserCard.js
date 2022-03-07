const NewUserCard = () => {

    return (
                  
        <div className="flex flex-row items-center space-x-4 p-5 border border-blue-200 shadow-md rounded-lg hover:bg-rosh-100 transition ease-in duration-300">
        <img className="w-20 rounded-full" src="https://media-exp1.licdn.com/dms/image/D5635AQGidivESJClIg/profile-framedphoto-shrink_200_200/0/1645387827928?e=1646737200&v=beta&t=jVPVFjt5hZOzLXrxk1Yl8fbwrso6BgqLFz6ofu_67f0" alt="user" />
        <div className="flex flex-col">
            <h2 className="text-2xl font-medium"> Alli Olarinde</h2>
            <span className="text-gray-50">Senior backend Engineer</span>
        </div>
        </div>
    )
}

export default NewUserCard;