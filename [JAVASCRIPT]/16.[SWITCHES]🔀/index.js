// switch = statement that examines a value
//          for a match against case clauses
//          More efficient than many "else if" statements

let grade = 'A'

switch (grade) {
	case 'A':
		console.log('You did great!')
		break
	case 'B':
		console.log('You did good!')
		break
	case 'C':
		console.log('You did okay!')
		break
	case 'D':
		console.log('You did not do well!')
		break
	case 'F':
		console.log('You failed!')
		break
	default:
		console.log(grade, 'is not a valid grade')
}
