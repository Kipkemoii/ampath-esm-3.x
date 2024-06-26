import React from 'react';
import { TableContainer, Table, TableCell, TableHeader, TableRow, TableHead, TableBody } from '@carbon/react';
import styles from './MOH_731.scss';
import PartOne from './PartOne';
import PartTwo from './PartTwo';
import PartThree from './PartThree';

const MOH731: React.FC = () => {
  return (
    <>
      <TableContainer className={styles['table']}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>
                <h2 className={styles['center']}>National AIDS & STI Control Program- NASCOP</h2>
                <h4 className={styles['center']}>Comprehensive HIV/AIDS reporting form</h4>
                <p className={styles['right']}>(MOH 731-Ver. July 2023)</p>
              </TableHeader>
            </TableRow>
            <TableRow>
              <TableHeader className={styles['space']}>
                County_______________Sub
                County_________________Facility__________________MFL____________Month_________year_________
              </TableHeader>
            </TableRow>
            <TableRow className={styles['height']}></TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <TableContainer className={styles['table-two']}>
        <Table>
          <TableBody>
            <TableRow>
              <TableHeader className={styles['border-one']} colSpan={12}>
                <h5>HIV Testing Services & Pre exposure Prophylaxis</h5>
              </TableHeader>
            </TableRow>
            <PartOne />
            <TableRow>
              <TableHeader className={styles['border-two']} colSpan={12}>
                <h5>2. Elimination of Mother-to-Child Transmission (EMTCT)</h5>
              </TableHeader>
            </TableRow>
            <PartTwo />
            <TableRow>
              <TableHeader className={styles['border-two']} colSpan={12}>
                <h5>3. HIV and TB treatment</h5>
              </TableHeader>
            </TableRow>
            <PartThree />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MOH731;
