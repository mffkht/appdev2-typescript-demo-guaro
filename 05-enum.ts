(() => {
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        SuperAdmin = 'SuperAdmin',
        // Principal,
        Principal = 'Principal',
        // Student,
        Student = 'Student',
    }

    // let userRole: Role = 0;
    let userRole: Role = Role.SuperAdmin;
})