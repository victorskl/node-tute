class Tek {
  public coerce_names(name: string) {
    /*
      Convert a workflow name to lowercase and remove any spacing
    */
    let _name = name.toLowerCase().replace(new RegExp(' ', 'g'), '');
    _name = _name.replace(new RegExp('\\.', 'g'), '-');
    _name = _name.replace(new RegExp('_', 'g'), '-');
    return _name;
  }
}

let tek = new Tek();

console.log(tek.coerce_names('umccr__automated__bclconvert_interop_qc__2.1.1 tek-tek'));
