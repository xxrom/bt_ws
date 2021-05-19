---

- If we have a lot of messages from the server (for example 1000 messages per second).
For optimization, it's better to aggregate them by some amount of time.
For example aggregate message for 300ms and then apply them into the local state. 
React will deal with them by one time instead of 300 rerenders on each message and it will be much faster.

---

TODO:
- [ ] add jest with test cases
- [ ] add pypelines for CI/CD (CircleCI/ GitHub Actions/ GitLab CI)
- [ ] handle docker-compose for server and client at the same time
- [ ] add docker images for testing app parts in CI/CD
