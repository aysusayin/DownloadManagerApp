var express = require('express');
var router = express.Router();

router.get('/software', function (req, res, next) {
  res.json({
    softwares: [
      {
        id: '1',
        name: 'Beautiful IDE',
      },
      {
        id: '2',
        name: 'Powerful Toolbox',
      },
      {
        id: '3',
        name: 'VPN Manager',
      }]
  });
});

router.get('/software/:id', function (req, res, next) {
  var response = {
    'id': req.params.id,
    'name': "Powerful Toolbox",
    'releases': [
      {
        'id': 12345,
        'date': '07-09-2020',
        'version': '365 20 1.0',
        'notes': 'This is a very good release. New improvemenst. Bug fix.',
        'channel': 'stable',
        'download': 'Powerful%Toolbox-365%20%1.0.zip'
      },
      {
        'id': 12346,
        'date': '08-12-2020',
        'version': '365 20 1.1',
        'notes': 'Mobile app support added. New shortcuts for easy navigation.',
        'channel': 'beta',
        'download': 'Powerful%Toolbox-365%20%1.1.zip'
      },
    ]
  };
  res.send(response);
});

router.get('/software/:id/release/:id', function (req, res, next) {
  var response = {
    'id': req.params.id,
    'software_id': req.params.software.id,
    'date': '07-09-2020',
    'version': '365 20 1.0',
    'notes': 'This is a very good release. New improvements. Bug fix.',
    'channel': 'stable',
    'download': 'Powerful%Toolbox-365%20%1.0.zip'
  };
  res.send(response);
});

router.get('/software/:id/:channel', function (req, res, next) {
  var response = {
    'releases': [
      {
        'id': '123',
        'software_id': req.params.software.id,
        'date': '07-09-2020',
        'version': '365 20 1.0',
        'notes': 'This is a very good release. New improvemenst. Bug fix.',
        'channel': req.params.channel,
        'download': 'Powerful%Toolbox-365%20%1.0.zip'
      },
      {
        'id': '124',
        'software_id': req.params.software.id,
        'date': '07-09-2018',
        'version': '365 18 0.1',
        'notes': 'This is a very old release. New improvemenst. Bug fix.',
        'channel': req.params.channel,
        'download': 'Powerful%Toolbox-365%18%0.1.zip'
      }]
  };
  res.send(response);
});

module.exports = router;
