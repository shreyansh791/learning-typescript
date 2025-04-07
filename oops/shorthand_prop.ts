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