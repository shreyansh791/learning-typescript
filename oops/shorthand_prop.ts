class Student {
  constructor(
    public name: string,      // Creates public property
    private ssn: string,      // Creates private property
    protected id: number,     // Creates protected property
    readonly graduationYear: number  // Creates readonly property
  ) {
    // The properties are automatically initialized
  }
}

const student = new Student("Alex", "123-45-6789", 12345, 2025);
console.log(student.name);  // Accessible
// console.log(student.ssn);   // Error: Property 'ssn' is private
// student.graduationYear = 2026;  // Error: Cannot assign to 'graduationYear' because it is a read-only property

/**
 * The read-only properties are those properties,whose value is initialized only once and it can not be changed later 
Read only members of a class can be accessed outside the class but its value can not be changed.
And since they can not be changed outside the class, they need to be initialized at declaration or should be initialized inside the class constructor.  
 */
