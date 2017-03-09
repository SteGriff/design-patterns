using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Adapter
{
    class JsonFileReader : IDataFileReader
    {
        string jsonText =
@"[
	{Name : 'Rolf', Age : 20},
	{Name : 'Dabe', Age : 42},
	{Name : 'Lex', Age : 33}
]";

        public object ReadNextRecord()
        {
            
        }

        public object ReadWholeFile()
        {

        }
    }
}
