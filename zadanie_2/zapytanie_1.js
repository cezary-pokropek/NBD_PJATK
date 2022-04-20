var mapGenderWeightHeight = function() {
      emit(this.sex, {avgWeight: this.weight, avgHeight: this.height});
    };
  
var reduceCalculateMeanHeight = function(key, val) {
    let meanHeight = Array.avg(val.map(x => x.avgHeight))
    let meanWeight = Array.avg(val.map(x => x.avgWeight));
      return {'meanWeight': meanWeight, 'meanHeight': meanHeight}};
  
    db.people.mapReduce(mapGenderWeightHeight, reduceCalculateMeanHeight,
        { out: "map_reduce_weight_height"},
      )
  
printjson((db.map_reduce_weight_height.find({})).toArray());
