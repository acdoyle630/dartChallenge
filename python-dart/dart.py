def dart ( arr ):
  score = 0
  perfect = 0
  length = len(arr)
  for x in range (0, length):
    if arr[x] < 5 and arr[x] >= 0:
      score += 10
      perfect += 1
    if arr[x] <= 10 and arr[x] >= 5:
      score += 5
    if perfect == length:
      score += 100

  print score
  print perfect

dart([1,2,3,7,10])