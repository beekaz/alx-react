import { Seq, Map } from 'immutable';

export default function printBestStudents(inputObject) {
    const newMap = Map(inputObject);
    const lazySeq = Seq(newMap);
    const gradesObject = lazySeq.filter((val) => val.score > 70).map((val) => (
        val.firstName.toUpperCase()
    ));
    console.log(gradesObject);
}