import unittest
from student import Student

class TestStudent(unittest.TestCase):
    
    def test_full_name(self):
        student = Student("john", "doe")
        self.assertEqual(student.full_name, "john doe")

if __name__ == '__main__':
    unittest.main()