
export interface UserRegistration {
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
    dateOfBirth: Date;
    sex: string;
    vehicleType: string;
    accountType: string;
    planEstablished: Date;
    planExpires: Date;
    country: string;
    autoRenew: boolean;
    emailVerified: boolean;
}
