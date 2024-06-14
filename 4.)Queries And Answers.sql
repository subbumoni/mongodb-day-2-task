-- 04 Find the number of problems solved by the user in codekata

--Query

db.codekata.aggregate([
  {$lookup:{
			from:"users",
			localField:"userId",
			foreignField:"userId",
			as:"Result"
}},
  {$project:{
			_id:0,
			problemSolved:1,
			"Result.userName":1
}}
])


--Answer

{
  problemSolved: 13,
  Result: [
    {
      userName: 'parthi'
    }
  ]
}
{
  problemSolved: 11,
  Result: [
    {
      userName: 'muthu'
    }
  ]
}
{
  problemSolved: 16,
  Result: [
    {
      userName: 'karthi'
    }
  ]
}
{
  problemSolved: 16,
  Result: [
    {
      userName: 'karthi'
    }
  ]
}
{
  problemSolved: 33,
  Result: [
    {
      userName: 'suresh'
    }
  ]
}
{
  problemSolved: 36,
  Result: [
    {
      userName: 'varun'
    }
  ]
}
{
  problemSolved: 61,
  Result: [
    {
      userName: 'balan'
    }
  ]
}
{
  problemSolved: 63,
  Result: [
    {
      userName: 'harish'
    }
  ]
}
{
  problemSolved: 66,
  Result: [
    {
      userName: 'logesh'
    }
  ]
}
{
  problemSolved: 66,
  Result: [
    {
      userName: 'maaran'
    }
  ]
}
{
  problemSolved: 63,
  Result: [
    {
      userName: 'kumar'
    }
  ]
}
{
  problemSolved: 16,
  Result: [
    {
      userName: 'abu'
    }
  ]
}
{
  problemSolved: 61,
  Result: [
    {
      userName: 'gokul'
    }
  ]
}
{
  problemSolved: 36,
  Result: [
    {
      userName: 'kannan'
    }
  ]
}
{
  problemSolved: 33,
  Result: [
    {
      userName: 'pariti'
    }
  ]
}
{
  problemSolved: 13,
  Result: [
    {
      userName: 'kathir'
    }
  ]
}
{
  problemSolved: 31,
  Result: [
    {
      userName: 'thiyagu'
    }
  ]
}
{
  problemSolved: 16,
  Result: [
    {
      userName: 'loki'
    }
  ]
}
{
  problemSolved: 13,
  Result: [
    {
      userName: 'deva'
    }
  ]
}
{
  problemSolved: 11,
  Result: [
    {
      userName: 'arjun'
    }
  ]
}