export const credentialsFormatter = (displayName) => {
    const fullName = displayName.split(" ")
    const firstName = fullName[0]
    const lastName = fullName.slice(1, fullName.length).join(' ') 
    return {firstName, lastName}
} 